# ImagesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**imagesControllerCreate**](#imagescontrollercreate) | **POST** /images | |
|[**imagesControllerCreateSeed**](#imagescontrollercreateseed) | **POST** /images/seed | |
|[**imagesControllerFindMine**](#imagescontrollerfindmine) | **GET** /images/mine | |
|[**imagesControllerFindOne**](#imagescontrollerfindone) | **GET** /images/{id} | |
|[**imagesControllerFindTop**](#imagescontrollerfindtop) | **GET** /images/top | |
|[**imagesControllerKeepCaptions**](#imagescontrollerkeepcaptions) | **PUT** /images/{id}/kept | |
|[**imagesControllerRemove**](#imagescontrollerremove) | **DELETE** /images/{id} | |
|[**imagesControllerVote**](#imagescontrollervote) | **POST** /images/{id}/votes | |
|[**imagesControllerWriteCaptions**](#imagescontrollerwritecaptions) | **POST** /images/{id}/captions | |
|[**imagesControllerWriteDrafts**](#imagescontrollerwritedrafts) | **POST** /images/{id}/drafts | |

# **imagesControllerCreate**
> PhotoResDto imagesControllerCreate()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let file: File; // (default to undefined)
let place: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.imagesControllerCreate(
    file,
    place
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **place** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PhotoResDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imagesControllerCreateSeed**
> PhotoResDto imagesControllerCreateSeed()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let file: File; // (default to undefined)
let place: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.imagesControllerCreateSeed(
    file,
    place
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **place** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PhotoResDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imagesControllerFindMine**
> Array<PhotoResDto> imagesControllerFindMine()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

const { status, data } = await apiInstance.imagesControllerFindMine();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PhotoResDto>**

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

# **imagesControllerFindOne**
> PhotoResDto imagesControllerFindOne()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.imagesControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PhotoResDto**

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

# **imagesControllerFindTop**
> Array<PhotoResDto> imagesControllerFindTop()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let range: 'week' | 'all'; // (default to undefined)
let limit: number; // (default to undefined)
let offset: number; // (default to undefined)

const { status, data } = await apiInstance.imagesControllerFindTop(
    range,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **range** | [**&#39;week&#39; | &#39;all&#39;**]**Array<&#39;week&#39; &#124; &#39;all&#39;>** |  | defaults to undefined|
| **limit** | [**number**] |  | defaults to undefined|
| **offset** | [**number**] |  | defaults to undefined|


### Return type

**Array<PhotoResDto>**

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

# **imagesControllerKeepCaptions**
> PhotoResDto imagesControllerKeepCaptions(keptCaptionsReqDto)


### Example

```typescript
import {
    ImagesApi,
    Configuration,
    KeptCaptionsReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let id: string; // (default to undefined)
let keptCaptionsReqDto: KeptCaptionsReqDto; //

const { status, data } = await apiInstance.imagesControllerKeepCaptions(
    id,
    keptCaptionsReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keptCaptionsReqDto** | **KeptCaptionsReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PhotoResDto**

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

# **imagesControllerRemove**
> imagesControllerRemove()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.imagesControllerRemove(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imagesControllerVote**
> PhotoResDto imagesControllerVote(voteReqDto)


### Example

```typescript
import {
    ImagesApi,
    Configuration,
    VoteReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let id: string; // (default to undefined)
let voteReqDto: VoteReqDto; //

const { status, data } = await apiInstance.imagesControllerVote(
    id,
    voteReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **voteReqDto** | **VoteReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PhotoResDto**

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

# **imagesControllerWriteCaptions**
> PhotoResDto imagesControllerWriteCaptions()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.imagesControllerWriteCaptions(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PhotoResDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imagesControllerWriteDrafts**
> PhotoResDto imagesControllerWriteDrafts()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.imagesControllerWriteDrafts(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PhotoResDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

