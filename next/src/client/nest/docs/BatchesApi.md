# BatchesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**batchesControllerFindMine**](#batchescontrollerfindmine) | **GET** /batches/mine | |
|[**batchesControllerFindPast**](#batchescontrollerfindpast) | **GET** /batches/{date} | |
|[**batchesControllerFindRecent**](#batchescontrollerfindrecent) | **GET** /batches | |
|[**batchesControllerFindToday**](#batchescontrollerfindtoday) | **GET** /batches/today | |

# **batchesControllerFindMine**
> Array<BatchSummaryResDto> batchesControllerFindMine()


### Example

```typescript
import {
    BatchesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

const { status, data } = await apiInstance.batchesControllerFindMine();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<BatchSummaryResDto>**

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

# **batchesControllerFindPast**
> BatchResDto batchesControllerFindPast()


### Example

```typescript
import {
    BatchesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

let date: string; // (default to undefined)

const { status, data } = await apiInstance.batchesControllerFindPast(
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] |  | defaults to undefined|


### Return type

**BatchResDto**

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

# **batchesControllerFindRecent**
> Array<BatchSummaryResDto> batchesControllerFindRecent()


### Example

```typescript
import {
    BatchesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

const { status, data } = await apiInstance.batchesControllerFindRecent();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<BatchSummaryResDto>**

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

# **batchesControllerFindToday**
> BatchResDto batchesControllerFindToday()


### Example

```typescript
import {
    BatchesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

const { status, data } = await apiInstance.batchesControllerFindToday();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**BatchResDto**

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

