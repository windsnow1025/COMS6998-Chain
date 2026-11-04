import axios, {AxiosResponse} from "axios";
import {getNestOpenAPIConfiguration} from "@/lib/common/APIConfig";
import {
  AdminApi,
  AdminConfigApi,
  AdminModelResDto,
  AdminPhotoPageResDto,
  AdminScreeningResDto,
  ChainCaptionPageResDto,
  ChainReqDto,
  ChainResDto,
  ChainsApi,
  ChainUpdateReqDto,
  PlaceholderResDto,
  RunPageResDto,
  RunResDto,
  StepReqDto,
} from "@/client/nest";

// The API's own message for a refused request, as the page shows it
function messageOf(error: unknown): string {
  if (axios.isAxiosError(error) && error.response) {
    const message: unknown = error.response.data?.message;
    if (typeof message === 'string') {
      return message;
    }
    if (Array.isArray(message)) {
      return message.join('; ');
    }
    return `The API answered ${error.response.status}`;
  }
  return error instanceof Error ? error.message : String(error);
}

async function unwrap<T>(request: Promise<AxiosResponse<T>>): Promise<T> {
  try {
    return (await request).data;
  } catch (error) {
    throw new Error(messageOf(error));
  }
}

export default class ChainClient {
  private readonly chains = new ChainsApi(getNestOpenAPIConfiguration());
  private readonly adminConfig = new AdminConfigApi(getNestOpenAPIConfiguration());
  private readonly admin = new AdminApi(getNestOpenAPIConfiguration());

  fetchChains(): Promise<ChainResDto[]> {
    return unwrap(this.chains.chainsControllerFindAll());
  }

  fetchChain(id: string): Promise<ChainResDto> {
    return unwrap(this.chains.chainsControllerFindOne(id));
  }

  createChain(dto: ChainReqDto): Promise<ChainResDto> {
    return unwrap(this.chains.chainsControllerCreate(dto));
  }

  updateChain(id: string, dto: ChainUpdateReqDto): Promise<ChainResDto> {
    return unwrap(this.chains.chainsControllerUpdate(id, dto));
  }

  deleteChain(id: string): Promise<void> {
    return unwrap(this.chains.chainsControllerRemove(id));
  }

  addStep(id: string, dto: StepReqDto): Promise<ChainResDto> {
    return unwrap(this.chains.chainsControllerAddStep(id, dto));
  }

  updateStep(id: string, stepId: string, dto: StepReqDto): Promise<ChainResDto> {
    return unwrap(this.chains.chainsControllerUpdateStep(id, stepId, dto));
  }

  deleteStep(id: string, stepId: string): Promise<ChainResDto> {
    return unwrap(this.chains.chainsControllerRemoveStep(id, stepId));
  }

  // Every step of the chain once, in the new order
  reorderSteps(id: string, stepIds: string[]): Promise<ChainResDto> {
    return unwrap(this.chains.chainsControllerReorderSteps(id, {stepIds}));
  }

  createRun(id: string, imageId: string): Promise<RunResDto> {
    return unwrap(this.chains.chainsControllerCreateRun(id, {imageId}));
  }

  fetchRuns(id: string, limit: number, offset: number): Promise<RunPageResDto> {
    return unwrap(this.chains.chainsControllerFindRuns(id, limit, offset));
  }

  fetchRun(id: string, runId: string): Promise<RunResDto> {
    return unwrap(this.chains.chainsControllerFindRun(id, runId));
  }

  fetchCaptions(id: string, limit: number, offset: number): Promise<ChainCaptionPageResDto> {
    return unwrap(this.chains.chainsControllerFindCaptions(id, limit, offset));
  }

  fetchPlaceholders(): Promise<PlaceholderResDto[]> {
    return unwrap(this.chains.chainsControllerFindPlaceholders());
  }

  // The product's step before any chain, as the admin set it
  fetchScreening(): Promise<AdminScreeningResDto> {
    return unwrap(this.adminConfig.adminConfigControllerFindScreening());
  }

  // Every model, as the admin lists them; a step runs on an enabled one
  fetchModels(): Promise<AdminModelResDto[]> {
    return unwrap(this.adminConfig.adminConfigControllerFindModels());
  }

  // The library's photos, for the photo picker
  fetchPhotos(limit: number, offset: number, q?: string): Promise<AdminPhotoPageResDto> {
    return unwrap(this.admin.adminControllerFindPhotos(limit, offset, q));
  }
}
