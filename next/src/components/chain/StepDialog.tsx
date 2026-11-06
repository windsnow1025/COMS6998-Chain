import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
  AdminModelResDto,
  PlaceholderResDto,
  StepReqDto,
  StepReqDtoInputEnum,
  StepReqDtoOutputEnum,
  StepResDto,
} from '@/client/nest';

const MaxStepNameLength = 16;
const MaxPromptLength = 20000;
// The API's refusal of a model that cannot be called
const ModelHold = 'A step runs on an enabled model of an enabled provider';

// Whether a step may run on the model: the API's rule
function choosable(model: AdminModelResDto): boolean {
  return model.enabled && model.providerEnabled;
}

type PromptField = 'systemPrompt' | 'userPrompt';

// The form, mounted while the dialog is open so that it starts from the step each time
function StepForm({step, models, placeholders, textOutputHold, saving, onClose, onSave}: {
  step: StepResDto | null;
  models: AdminModelResDto[];
  placeholders: PlaceholderResDto[];
  textOutputHold: string;
  saving: boolean;
  onClose: () => void;
  onSave: (dto: StepReqDto) => void;
}) {
  const [values, setValues] = React.useState<StepReqDto>(() => (step
    ? {
      name: step.name,
      input: step.input,
      output: step.output,
      systemPrompt: step.systemPrompt,
      userPrompt: step.userPrompt,
      modelId: step.modelId,
    }
    : {
      name: '',
      input: StepReqDtoInputEnum.Text,
      output: StepReqDtoOutputEnum.Captions,
      systemPrompt: '',
      userPrompt: '',
      modelId: models.find(choosable)?.id ?? '',
    }));
  // The prompt a placeholder is inserted into: the one focused last, the user prompt before any
  const [target, setTarget] = React.useState<PromptField>('userPrompt');
  const systemPromptRef = React.useRef<HTMLTextAreaElement>(null);
  const userPromptRef = React.useRef<HTMLTextAreaElement>(null);

  const chosenModel = models.find((model) => model.id === values.modelId);
  const modelHold = chosenModel && !choosable(chosenModel) ? ModelHold : '';
  const complete = values.name.trim() !== ''
    && values.systemPrompt.trim() !== ''
    && values.userPrompt.trim() !== ''
    && values.modelId !== ''
    && modelHold === '';

  const set = (change: Partial<StepReqDto>) => setValues((current) => ({...current, ...change}));

  // Puts the placeholder where the cursor stands in the target prompt, replacing a selection, and leaves the cursor after it
  const insert = (placeholder: string) => {
    const element = (target === 'systemPrompt' ? systemPromptRef : userPromptRef).current;
    const text = values[target];
    const start = element?.selectionStart ?? text.length;
    const end = element?.selectionEnd ?? text.length;
    set({[target]: `${text.slice(0, start)}${placeholder}${text.slice(end)}`});
    const caret = start + placeholder.length;
    requestAnimationFrame(() => {
      element?.focus();
      element?.setSelectionRange(caret, caret);
    });
  };

  return (
    <>
      <DialogTitle>{step ? 'Edit step' : 'Add step'}</DialogTitle>
      <DialogContent>
        <Box className="flex-column" sx={{gap: 2, pt: 1}}>
          <Box className="flex-normal" sx={{gap: 2, alignItems: 'flex-start'}}>
            <TextField
              label="Name"
              value={values.name}
              onChange={(event) => set({name: event.target.value})}
              required
              sx={{flex: '1 1 200px'}}
              slotProps={{htmlInput: {maxLength: MaxStepNameLength}}}
            />
            <TextField
              select
              label="Input"
              value={values.input}
              onChange={(event) => set({input: event.target.value as StepReqDtoInputEnum})}
              sx={{flex: '1 1 160px'}}
            >
              <MenuItem value={StepReqDtoInputEnum.Image}>Photo</MenuItem>
              <MenuItem value={StepReqDtoInputEnum.Text}>Text</MenuItem>
            </TextField>
            <TextField
              select
              label="Output"
              value={values.output}
              onChange={(event) => set({output: event.target.value as StepReqDtoOutputEnum})}
              sx={{flex: '1 1 160px'}}
              helperText={textOutputHold}
            >
              <MenuItem value={StepReqDtoOutputEnum.Text} disabled={textOutputHold !== ''}>Text</MenuItem>
              <MenuItem value={StepReqDtoOutputEnum.Captions}>Captions</MenuItem>
            </TextField>
          </Box>
          <TextField
            select
            label="Model"
            value={values.modelId}
            onChange={(event) => set({modelId: event.target.value})}
            required
            error={modelHold !== ''}
            helperText={modelHold}
            fullWidth
          >
            {models.map((model) => (
              <MenuItem key={model.id} value={model.id} disabled={!choosable(model)}>{model.apiType} · {model.name}</MenuItem>
            ))}
          </TextField>
          <TextField
            label="System prompt"
            value={values.systemPrompt}
            onChange={(event) => set({systemPrompt: event.target.value})}
            onFocus={() => setTarget('systemPrompt')}
            inputRef={systemPromptRef}
            required
            multiline
            minRows={8}
            maxRows={24}
            fullWidth
            slotProps={{htmlInput: {maxLength: MaxPromptLength}}}
          />
          <TextField
            label="User prompt"
            value={values.userPrompt}
            onChange={(event) => set({userPrompt: event.target.value})}
            onFocus={() => setTarget('userPrompt')}
            inputRef={userPromptRef}
            required
            multiline
            minRows={4}
            maxRows={16}
            fullWidth
            slotProps={{htmlInput: {maxLength: MaxPromptLength}}}
          />
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Placeholders a prompt may carry, filled at each run; a click puts one at the cursor.
            </Typography>
            <Box className="flex-column" sx={{gap: 0.75}}>
              {placeholders.map((placeholder) => (
                <Box key={placeholder.placeholder} className="flex-normal" sx={{gap: 1.5, flexWrap: 'nowrap', alignItems: 'baseline'}}>
                  <Chip
                    size="small"
                    variant="outlined"
                    clickable
                    label={placeholder.placeholder}
                    onClick={() => insert(placeholder.placeholder)}
                    sx={{fontFamily: 'monospace', flexShrink: 0}}
                  />
                  <Typography variant="body2" color="text.secondary">{placeholder.meaning}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={saving}>Cancel</Button>
        <Button
          variant="contained"
          onClick={() => onSave({...values, name: values.name.trim()})}
          disabled={saving || !complete}
        >
          {saving ? 'Saving…' : 'Save'}
        </Button>
      </DialogActions>
    </>
  );
}

// A step's fields, with the placeholders a prompt may carry under the prompts
export default function StepDialog({open, step, models, placeholders, textOutputHold, saving, onClose, onSave}: {
  open: boolean;
  // The step edited; null for a new one
  step: StepResDto | null;
  // Every model; one disabled, or of a disabled provider, is listed but not choosable
  models: AdminModelResDto[];
  placeholders: PlaceholderResDto[];
  // Why the step cannot answer text, for the last step of a chain in the mix; empty when it can
  textOutputHold: string;
  saving: boolean;
  onClose: () => void;
  onSave: (dto: StepReqDto) => void;
}) {
  return (
    <Dialog open={open} onClose={saving ? undefined : onClose} fullWidth maxWidth="md">
      {open && (
        <StepForm
          step={step}
          models={models}
          placeholders={placeholders}
          textOutputHold={textOutputHold}
          saving={saving}
          onClose={onClose}
          onSave={onSave}
        />
      )}
    </Dialog>
  );
}
