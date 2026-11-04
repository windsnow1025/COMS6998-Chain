# CaptionsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**captionsControllerFindAll**](#captionscontrollerfindall) | **GET** /captions | |

# **captionsControllerFindAll**
> Array<CaptionResDto> captionsControllerFindAll()


### Example

```typescript
import {
    CaptionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CaptionsApi(configuration);

const { status, data } = await apiInstance.captionsControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CaptionResDto>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

