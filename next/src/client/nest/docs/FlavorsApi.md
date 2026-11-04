# FlavorsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**flavorsControllerFindAll**](#flavorscontrollerfindall) | **GET** /flavors | |

# **flavorsControllerFindAll**
> Array<FlavorResDto> flavorsControllerFindAll()


### Example

```typescript
import {
    FlavorsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FlavorsApi(configuration);

const { status, data } = await apiInstance.flavorsControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FlavorResDto>**

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

