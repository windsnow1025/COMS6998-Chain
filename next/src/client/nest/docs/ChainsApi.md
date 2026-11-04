# ChainsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chainsControllerAddStep**](#chainscontrolleraddstep) | **POST** /chains/{id}/steps | |
|[**chainsControllerCreate**](#chainscontrollercreate) | **POST** /chains | |
|[**chainsControllerCreateRun**](#chainscontrollercreaterun) | **POST** /chains/{id}/runs | |
|[**chainsControllerFindAll**](#chainscontrollerfindall) | **GET** /chains | |
|[**chainsControllerFindCaptions**](#chainscontrollerfindcaptions) | **GET** /chains/{id}/captions | |
|[**chainsControllerFindOne**](#chainscontrollerfindone) | **GET** /chains/{id} | |
|[**chainsControllerFindPlaceholders**](#chainscontrollerfindplaceholders) | **GET** /chains/placeholders | |
|[**chainsControllerFindRun**](#chainscontrollerfindrun) | **GET** /chains/{id}/runs/{runId} | |
|[**chainsControllerFindRuns**](#chainscontrollerfindruns) | **GET** /chains/{id}/runs | |
|[**chainsControllerRemove**](#chainscontrollerremove) | **DELETE** /chains/{id} | |
|[**chainsControllerRemoveStep**](#chainscontrollerremovestep) | **DELETE** /chains/{id}/steps/{stepId} | |
|[**chainsControllerReorderSteps**](#chainscontrollerreordersteps) | **PUT** /chains/{id}/steps/order | |
|[**chainsControllerUpdate**](#chainscontrollerupdate) | **PATCH** /chains/{id} | |
|[**chainsControllerUpdateStep**](#chainscontrollerupdatestep) | **PATCH** /chains/{id}/steps/{stepId} | |

# **chainsControllerAddStep**
> ChainResDto chainsControllerAddStep(stepReqDto)


### Example

```typescript
import {
    ChainsApi,
    Configuration,
    StepReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let id: string; // (default to undefined)
let stepReqDto: StepReqDto; //

const { status, data } = await apiInstance.chainsControllerAddStep(
    id,
    stepReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stepReqDto** | **StepReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChainResDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chainsControllerCreate**
> ChainResDto chainsControllerCreate(chainReqDto)


### Example

```typescript
import {
    ChainsApi,
    Configuration,
    ChainReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let chainReqDto: ChainReqDto; //

const { status, data } = await apiInstance.chainsControllerCreate(
    chainReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chainReqDto** | **ChainReqDto**|  | |


### Return type

**ChainResDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chainsControllerCreateRun**
> RunResDto chainsControllerCreateRun(runReqDto)


### Example

```typescript
import {
    ChainsApi,
    Configuration,
    RunReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let id: string; // (default to undefined)
let runReqDto: RunReqDto; //

const { status, data } = await apiInstance.chainsControllerCreateRun(
    id,
    runReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **runReqDto** | **RunReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RunResDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chainsControllerFindAll**
> Array<ChainResDto> chainsControllerFindAll()


### Example

```typescript
import {
    ChainsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

const { status, data } = await apiInstance.chainsControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ChainResDto>**

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

# **chainsControllerFindCaptions**
> ChainCaptionPageResDto chainsControllerFindCaptions()


### Example

```typescript
import {
    ChainsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let id: string; // (default to undefined)
let limit: number; // (default to undefined)
let offset: number; // (default to undefined)

const { status, data } = await apiInstance.chainsControllerFindCaptions(
    id,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | defaults to undefined|
| **offset** | [**number**] |  | defaults to undefined|


### Return type

**ChainCaptionPageResDto**

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

# **chainsControllerFindOne**
> ChainResDto chainsControllerFindOne()


### Example

```typescript
import {
    ChainsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.chainsControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChainResDto**

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

# **chainsControllerFindPlaceholders**
> Array<PlaceholderResDto> chainsControllerFindPlaceholders()


### Example

```typescript
import {
    ChainsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

const { status, data } = await apiInstance.chainsControllerFindPlaceholders();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PlaceholderResDto>**

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

# **chainsControllerFindRun**
> RunResDto chainsControllerFindRun()


### Example

```typescript
import {
    ChainsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let id: string; // (default to undefined)
let runId: string; // (default to undefined)

const { status, data } = await apiInstance.chainsControllerFindRun(
    id,
    runId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **runId** | [**string**] |  | defaults to undefined|


### Return type

**RunResDto**

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

# **chainsControllerFindRuns**
> RunPageResDto chainsControllerFindRuns()


### Example

```typescript
import {
    ChainsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let id: string; // (default to undefined)
let limit: number; // (default to undefined)
let offset: number; // (default to undefined)

const { status, data } = await apiInstance.chainsControllerFindRuns(
    id,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | defaults to undefined|
| **offset** | [**number**] |  | defaults to undefined|


### Return type

**RunPageResDto**

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

# **chainsControllerRemove**
> chainsControllerRemove()


### Example

```typescript
import {
    ChainsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.chainsControllerRemove(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chainsControllerRemoveStep**
> ChainResDto chainsControllerRemoveStep()


### Example

```typescript
import {
    ChainsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let id: string; // (default to undefined)
let stepId: string; // (default to undefined)

const { status, data } = await apiInstance.chainsControllerRemoveStep(
    id,
    stepId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **stepId** | [**string**] |  | defaults to undefined|


### Return type

**ChainResDto**

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

# **chainsControllerReorderSteps**
> ChainResDto chainsControllerReorderSteps(stepOrderReqDto)


### Example

```typescript
import {
    ChainsApi,
    Configuration,
    StepOrderReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let id: string; // (default to undefined)
let stepOrderReqDto: StepOrderReqDto; //

const { status, data } = await apiInstance.chainsControllerReorderSteps(
    id,
    stepOrderReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stepOrderReqDto** | **StepOrderReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChainResDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chainsControllerUpdate**
> ChainResDto chainsControllerUpdate(chainUpdateReqDto)


### Example

```typescript
import {
    ChainsApi,
    Configuration,
    ChainUpdateReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let id: string; // (default to undefined)
let chainUpdateReqDto: ChainUpdateReqDto; //

const { status, data } = await apiInstance.chainsControllerUpdate(
    id,
    chainUpdateReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chainUpdateReqDto** | **ChainUpdateReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChainResDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chainsControllerUpdateStep**
> ChainResDto chainsControllerUpdateStep(stepReqDto)


### Example

```typescript
import {
    ChainsApi,
    Configuration,
    StepReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let id: string; // (default to undefined)
let stepId: string; // (default to undefined)
let stepReqDto: StepReqDto; //

const { status, data } = await apiInstance.chainsControllerUpdateStep(
    id,
    stepId,
    stepReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stepReqDto** | **StepReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **stepId** | [**string**] |  | defaults to undefined|


### Return type

**ChainResDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

