import {StepResDto, StepResDtoOutputEnum} from '@/client/nest';

// The rules of the mix as the API holds them (ChainsService): a page holds a control before the click with the
// sentence the API would answer after it
export const MinVoicesInMix = 3;
export const MixNeedsCaptions = 'A chain in the mix ends with a step that writes captions';
export const MixKeepsMinimum = `The mix keeps at least ${MinVoicesInMix} voices`;

// Whether steps in this order end with a step that writes captions
export function writesCaptions(steps: Pick<StepResDto, 'output'>[]): boolean {
  return steps.length > 0 && steps[steps.length - 1].output === StepResDtoOutputEnum.Captions;
}

// Why a chain that wrote captions of the product cannot be deleted
export function captionsHold(count: number): string {
  return `The voice wrote ${count} ${count === 1 ? 'caption' : 'captions'} of the product, so it can leave the mix but not be deleted`;
}
