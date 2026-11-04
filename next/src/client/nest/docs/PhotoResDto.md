# PhotoResDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**place** | **string** |  | [default to undefined]
**uploader** | [**PhotoUploaderResDto**](PhotoUploaderResDto.md) |  | [default to undefined]
**batchDate** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**url** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**queuePosition** | **number** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**captions** | [**Array&lt;PhotoCaptionResDto&gt;**](PhotoCaptionResDto.md) |  | [default to undefined]
**drafts** | [**Array&lt;PhotoDraftResDto&gt;**](PhotoDraftResDto.md) |  | [optional] [default to undefined]
**revealed** | **boolean** |  | [default to undefined]
**voters** | **number** |  | [optional] [default to undefined]
**nonePicks** | **number** |  | [optional] [default to undefined]
**viewer** | [**PhotoViewerResDto**](PhotoViewerResDto.md) |  | [default to undefined]

## Example

```typescript
import { PhotoResDto } from './api';

const instance: PhotoResDto = {
    place,
    uploader,
    batchDate,
    id,
    url,
    description,
    queuePosition,
    createdAt,
    captions,
    drafts,
    revealed,
    voters,
    nonePicks,
    viewer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
