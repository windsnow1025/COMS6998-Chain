# AdminApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**adminControllerFindLlmCall**](#admincontrollerfindllmcall) | **GET** /admin/llm-calls/{id} | |
|[**adminControllerFindOverview**](#admincontrollerfindoverview) | **GET** /admin/overview | |
|[**adminControllerFindPhoto**](#admincontrollerfindphoto) | **GET** /admin/photos/{id} | |
|[**adminControllerFindPhotos**](#admincontrollerfindphotos) | **GET** /admin/photos | |
|[**adminControllerFindUsers**](#admincontrollerfindusers) | **GET** /admin/users | |
|[**adminControllerFindVotes**](#admincontrollerfindvotes) | **GET** /admin/votes | |
|[**adminControllerRemoveCaption**](#admincontrollerremovecaption) | **DELETE** /admin/captions/{id} | |
|[**adminControllerUpdateCaption**](#admincontrollerupdatecaption) | **PATCH** /admin/captions/{id} | |
|[**adminControllerUpdatePhoto**](#admincontrollerupdatephoto) | **PATCH** /admin/photos/{id} | |

# **adminControllerFindLlmCall**
> AdminLlmCallResDto adminControllerFindLlmCall()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.adminControllerFindLlmCall(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AdminLlmCallResDto**

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

# **adminControllerFindOverview**
> AdminOverviewResDto adminControllerFindOverview()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.adminControllerFindOverview();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AdminOverviewResDto**

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

# **adminControllerFindPhoto**
> AdminPhotoDetailResDto adminControllerFindPhoto()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.adminControllerFindPhoto(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AdminPhotoDetailResDto**

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

# **adminControllerFindPhotos**
> AdminPhotoPageResDto adminControllerFindPhotos()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let limit: number; // (default to undefined)
let offset: number; // (default to undefined)
let q: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.adminControllerFindPhotos(
    limit,
    offset,
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | defaults to undefined|
| **offset** | [**number**] |  | defaults to undefined|
| **q** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AdminPhotoPageResDto**

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

# **adminControllerFindUsers**
> Array<AdminUserResDto> adminControllerFindUsers()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.adminControllerFindUsers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AdminUserResDto>**

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

# **adminControllerFindVotes**
> AdminVotePageResDto adminControllerFindVotes()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let limit: number; // (default to undefined)
let offset: number; // (default to undefined)

const { status, data } = await apiInstance.adminControllerFindVotes(
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | defaults to undefined|
| **offset** | [**number**] |  | defaults to undefined|


### Return type

**AdminVotePageResDto**

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

# **adminControllerRemoveCaption**
> adminControllerRemoveCaption()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.adminControllerRemoveCaption(
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

# **adminControllerUpdateCaption**
> AdminCaptionResDto adminControllerUpdateCaption(adminCaptionReqDto)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminCaptionReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let id: string; // (default to undefined)
let adminCaptionReqDto: AdminCaptionReqDto; //

const { status, data } = await apiInstance.adminControllerUpdateCaption(
    id,
    adminCaptionReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminCaptionReqDto** | **AdminCaptionReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AdminCaptionResDto**

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

# **adminControllerUpdatePhoto**
> AdminPhotoDetailResDto adminControllerUpdatePhoto(adminPhotoReqDto)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminPhotoReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let id: string; // (default to undefined)
let adminPhotoReqDto: AdminPhotoReqDto; //

const { status, data } = await apiInstance.adminControllerUpdatePhoto(
    id,
    adminPhotoReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminPhotoReqDto** | **AdminPhotoReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AdminPhotoDetailResDto**

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

