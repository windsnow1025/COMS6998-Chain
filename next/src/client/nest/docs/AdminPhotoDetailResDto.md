# AdminPhotoDetailResDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**place** | **string** |  | [default to undefined]
**uploader** | [**AdminPhotoUploaderResDto**](AdminPhotoUploaderResDto.md) |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**url** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**batchDates** | **Array&lt;string&gt;** |  | [default to undefined]
**captions** | [**Array&lt;AdminCaptionResDto&gt;**](AdminCaptionResDto.md) |  | [default to undefined]
**votes** | [**Array&lt;AdminPhotoVoteResDto&gt;**](AdminPhotoVoteResDto.md) |  | [default to undefined]

## Example

```typescript
import { AdminPhotoDetailResDto } from './api';

const instance: AdminPhotoDetailResDto = {
    place,
    uploader,
    id,
    url,
    description,
    createdAt,
    batchDates,
    captions,
    votes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
