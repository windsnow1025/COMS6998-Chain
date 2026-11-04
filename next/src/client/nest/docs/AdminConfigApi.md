# AdminConfigApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**adminConfigControllerCreateDomain**](#adminconfigcontrollercreatedomain) | **POST** /admin/domains | |
|[**adminConfigControllerCreateEmail**](#adminconfigcontrollercreateemail) | **POST** /admin/emails | |
|[**adminConfigControllerCreateExample**](#adminconfigcontrollercreateexample) | **POST** /admin/examples | |
|[**adminConfigControllerCreateModel**](#adminconfigcontrollercreatemodel) | **POST** /admin/models | |
|[**adminConfigControllerCreateProvider**](#adminconfigcontrollercreateprovider) | **POST** /admin/providers | |
|[**adminConfigControllerCreateTerm**](#adminconfigcontrollercreateterm) | **POST** /admin/terms | |
|[**adminConfigControllerFindAccessPolicy**](#adminconfigcontrollerfindaccesspolicy) | **GET** /admin/access-policy | |
|[**adminConfigControllerFindAvailableModels**](#adminconfigcontrollerfindavailablemodels) | **GET** /admin/available-models | |
|[**adminConfigControllerFindChains**](#adminconfigcontrollerfindchains) | **GET** /admin/chains | |
|[**adminConfigControllerFindDomains**](#adminconfigcontrollerfinddomains) | **GET** /admin/domains | |
|[**adminConfigControllerFindEmails**](#adminconfigcontrollerfindemails) | **GET** /admin/emails | |
|[**adminConfigControllerFindExamples**](#adminconfigcontrollerfindexamples) | **GET** /admin/examples | |
|[**adminConfigControllerFindLlmCallSteps**](#adminconfigcontrollerfindllmcallsteps) | **GET** /admin/llm-calls/steps | |
|[**adminConfigControllerFindLlmCalls**](#adminconfigcontrollerfindllmcalls) | **GET** /admin/llm-calls | |
|[**adminConfigControllerFindModels**](#adminconfigcontrollerfindmodels) | **GET** /admin/models | |
|[**adminConfigControllerFindProviders**](#adminconfigcontrollerfindproviders) | **GET** /admin/providers | |
|[**adminConfigControllerFindScreening**](#adminconfigcontrollerfindscreening) | **GET** /admin/screening | |
|[**adminConfigControllerFindTerms**](#adminconfigcontrollerfindterms) | **GET** /admin/terms | |
|[**adminConfigControllerRemoveDomain**](#adminconfigcontrollerremovedomain) | **DELETE** /admin/domains/{id} | |
|[**adminConfigControllerRemoveEmail**](#adminconfigcontrollerremoveemail) | **DELETE** /admin/emails/{id} | |
|[**adminConfigControllerRemoveExample**](#adminconfigcontrollerremoveexample) | **DELETE** /admin/examples/{id} | |
|[**adminConfigControllerRemoveModel**](#adminconfigcontrollerremovemodel) | **DELETE** /admin/models/{id} | |
|[**adminConfigControllerRemoveProvider**](#adminconfigcontrollerremoveprovider) | **DELETE** /admin/providers/{id} | |
|[**adminConfigControllerRemoveTerm**](#adminconfigcontrollerremoveterm) | **DELETE** /admin/terms/{id} | |
|[**adminConfigControllerUpdateAccessPolicy**](#adminconfigcontrollerupdateaccesspolicy) | **PATCH** /admin/access-policy | |
|[**adminConfigControllerUpdateChain**](#adminconfigcontrollerupdatechain) | **PATCH** /admin/chains/{slug} | |
|[**adminConfigControllerUpdateDomain**](#adminconfigcontrollerupdatedomain) | **PATCH** /admin/domains/{id} | |
|[**adminConfigControllerUpdateEmail**](#adminconfigcontrollerupdateemail) | **PATCH** /admin/emails/{id} | |
|[**adminConfigControllerUpdateExample**](#adminconfigcontrollerupdateexample) | **PATCH** /admin/examples/{id} | |
|[**adminConfigControllerUpdateModel**](#adminconfigcontrollerupdatemodel) | **PATCH** /admin/models/{id} | |
|[**adminConfigControllerUpdateProvider**](#adminconfigcontrollerupdateprovider) | **PATCH** /admin/providers/{id} | |
|[**adminConfigControllerUpdateScreening**](#adminconfigcontrollerupdatescreening) | **PATCH** /admin/screening | |
|[**adminConfigControllerUpdateTerm**](#adminconfigcontrollerupdateterm) | **PATCH** /admin/terms/{id} | |

# **adminConfigControllerCreateDomain**
> AdminDomainResDto adminConfigControllerCreateDomain(adminDomainReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminDomainReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let adminDomainReqDto: AdminDomainReqDto; //

const { status, data } = await apiInstance.adminConfigControllerCreateDomain(
    adminDomainReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminDomainReqDto** | **AdminDomainReqDto**|  | |


### Return type

**AdminDomainResDto**

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

# **adminConfigControllerCreateEmail**
> AdminEmailResDto adminConfigControllerCreateEmail(adminEmailReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminEmailReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let adminEmailReqDto: AdminEmailReqDto; //

const { status, data } = await apiInstance.adminConfigControllerCreateEmail(
    adminEmailReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminEmailReqDto** | **AdminEmailReqDto**|  | |


### Return type

**AdminEmailResDto**

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

# **adminConfigControllerCreateExample**
> AdminExampleResDto adminConfigControllerCreateExample(adminExampleReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminExampleReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let adminExampleReqDto: AdminExampleReqDto; //

const { status, data } = await apiInstance.adminConfigControllerCreateExample(
    adminExampleReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminExampleReqDto** | **AdminExampleReqDto**|  | |


### Return type

**AdminExampleResDto**

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

# **adminConfigControllerCreateModel**
> AdminModelResDto adminConfigControllerCreateModel(adminModelReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminModelReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let adminModelReqDto: AdminModelReqDto; //

const { status, data } = await apiInstance.adminConfigControllerCreateModel(
    adminModelReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminModelReqDto** | **AdminModelReqDto**|  | |


### Return type

**AdminModelResDto**

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

# **adminConfigControllerCreateProvider**
> AdminProviderResDto adminConfigControllerCreateProvider(adminProviderReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminProviderReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let adminProviderReqDto: AdminProviderReqDto; //

const { status, data } = await apiInstance.adminConfigControllerCreateProvider(
    adminProviderReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminProviderReqDto** | **AdminProviderReqDto**|  | |


### Return type

**AdminProviderResDto**

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

# **adminConfigControllerCreateTerm**
> AdminTermResDto adminConfigControllerCreateTerm(adminTermReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminTermReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let adminTermReqDto: AdminTermReqDto; //

const { status, data } = await apiInstance.adminConfigControllerCreateTerm(
    adminTermReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminTermReqDto** | **AdminTermReqDto**|  | |


### Return type

**AdminTermResDto**

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

# **adminConfigControllerFindAccessPolicy**
> AdminAccessPolicyResDto adminConfigControllerFindAccessPolicy()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

const { status, data } = await apiInstance.adminConfigControllerFindAccessPolicy();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AdminAccessPolicyResDto**

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

# **adminConfigControllerFindAvailableModels**
> Array<AdminAvailableModelResDto> adminConfigControllerFindAvailableModels()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

const { status, data } = await apiInstance.adminConfigControllerFindAvailableModels();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AdminAvailableModelResDto>**

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

# **adminConfigControllerFindChains**
> Array<ChainResDto> adminConfigControllerFindChains()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

const { status, data } = await apiInstance.adminConfigControllerFindChains();
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

# **adminConfigControllerFindDomains**
> Array<AdminDomainResDto> adminConfigControllerFindDomains()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

const { status, data } = await apiInstance.adminConfigControllerFindDomains();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AdminDomainResDto>**

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

# **adminConfigControllerFindEmails**
> Array<AdminEmailResDto> adminConfigControllerFindEmails()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

const { status, data } = await apiInstance.adminConfigControllerFindEmails();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AdminEmailResDto>**

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

# **adminConfigControllerFindExamples**
> Array<AdminExampleResDto> adminConfigControllerFindExamples()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

const { status, data } = await apiInstance.adminConfigControllerFindExamples();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AdminExampleResDto>**

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

# **adminConfigControllerFindLlmCallSteps**
> Array<string> adminConfigControllerFindLlmCallSteps()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

const { status, data } = await apiInstance.adminConfigControllerFindLlmCallSteps();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<string>**

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

# **adminConfigControllerFindLlmCalls**
> AdminLlmCallPageResDto adminConfigControllerFindLlmCalls()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let limit: number; // (default to undefined)
let offset: number; // (default to undefined)
let step: string; // (optional) (default to undefined)
let q: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.adminConfigControllerFindLlmCalls(
    limit,
    offset,
    step,
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | defaults to undefined|
| **offset** | [**number**] |  | defaults to undefined|
| **step** | [**string**] |  | (optional) defaults to undefined|
| **q** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AdminLlmCallPageResDto**

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

# **adminConfigControllerFindModels**
> Array<AdminModelResDto> adminConfigControllerFindModels()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

const { status, data } = await apiInstance.adminConfigControllerFindModels();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AdminModelResDto>**

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

# **adminConfigControllerFindProviders**
> Array<AdminProviderResDto> adminConfigControllerFindProviders()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

const { status, data } = await apiInstance.adminConfigControllerFindProviders();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AdminProviderResDto>**

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

# **adminConfigControllerFindScreening**
> AdminScreeningResDto adminConfigControllerFindScreening()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

const { status, data } = await apiInstance.adminConfigControllerFindScreening();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AdminScreeningResDto**

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

# **adminConfigControllerFindTerms**
> Array<AdminTermResDto> adminConfigControllerFindTerms()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

const { status, data } = await apiInstance.adminConfigControllerFindTerms();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AdminTermResDto>**

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

# **adminConfigControllerRemoveDomain**
> adminConfigControllerRemoveDomain()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.adminConfigControllerRemoveDomain(
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

# **adminConfigControllerRemoveEmail**
> adminConfigControllerRemoveEmail()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.adminConfigControllerRemoveEmail(
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

# **adminConfigControllerRemoveExample**
> adminConfigControllerRemoveExample()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.adminConfigControllerRemoveExample(
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

# **adminConfigControllerRemoveModel**
> adminConfigControllerRemoveModel()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.adminConfigControllerRemoveModel(
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

# **adminConfigControllerRemoveProvider**
> adminConfigControllerRemoveProvider()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.adminConfigControllerRemoveProvider(
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

# **adminConfigControllerRemoveTerm**
> adminConfigControllerRemoveTerm()


### Example

```typescript
import {
    AdminConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.adminConfigControllerRemoveTerm(
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

# **adminConfigControllerUpdateAccessPolicy**
> AdminAccessPolicyResDto adminConfigControllerUpdateAccessPolicy(adminAccessPolicyReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminAccessPolicyReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let adminAccessPolicyReqDto: AdminAccessPolicyReqDto; //

const { status, data } = await apiInstance.adminConfigControllerUpdateAccessPolicy(
    adminAccessPolicyReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminAccessPolicyReqDto** | **AdminAccessPolicyReqDto**|  | |


### Return type

**AdminAccessPolicyResDto**

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

# **adminConfigControllerUpdateChain**
> ChainResDto adminConfigControllerUpdateChain(adminChainReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminChainReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let slug: string; // (default to undefined)
let adminChainReqDto: AdminChainReqDto; //

const { status, data } = await apiInstance.adminConfigControllerUpdateChain(
    slug,
    adminChainReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminChainReqDto** | **AdminChainReqDto**|  | |
| **slug** | [**string**] |  | defaults to undefined|


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

# **adminConfigControllerUpdateDomain**
> AdminDomainResDto adminConfigControllerUpdateDomain(adminDomainReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminDomainReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let id: string; // (default to undefined)
let adminDomainReqDto: AdminDomainReqDto; //

const { status, data } = await apiInstance.adminConfigControllerUpdateDomain(
    id,
    adminDomainReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminDomainReqDto** | **AdminDomainReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AdminDomainResDto**

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

# **adminConfigControllerUpdateEmail**
> AdminEmailResDto adminConfigControllerUpdateEmail(adminEmailReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminEmailReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let id: string; // (default to undefined)
let adminEmailReqDto: AdminEmailReqDto; //

const { status, data } = await apiInstance.adminConfigControllerUpdateEmail(
    id,
    adminEmailReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminEmailReqDto** | **AdminEmailReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AdminEmailResDto**

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

# **adminConfigControllerUpdateExample**
> AdminExampleResDto adminConfigControllerUpdateExample(adminExampleReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminExampleReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let id: string; // (default to undefined)
let adminExampleReqDto: AdminExampleReqDto; //

const { status, data } = await apiInstance.adminConfigControllerUpdateExample(
    id,
    adminExampleReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminExampleReqDto** | **AdminExampleReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AdminExampleResDto**

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

# **adminConfigControllerUpdateModel**
> AdminModelResDto adminConfigControllerUpdateModel(adminModelUpdateReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminModelUpdateReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let id: string; // (default to undefined)
let adminModelUpdateReqDto: AdminModelUpdateReqDto; //

const { status, data } = await apiInstance.adminConfigControllerUpdateModel(
    id,
    adminModelUpdateReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminModelUpdateReqDto** | **AdminModelUpdateReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AdminModelResDto**

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

# **adminConfigControllerUpdateProvider**
> AdminProviderResDto adminConfigControllerUpdateProvider(adminProviderUpdateReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminProviderUpdateReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let id: string; // (default to undefined)
let adminProviderUpdateReqDto: AdminProviderUpdateReqDto; //

const { status, data } = await apiInstance.adminConfigControllerUpdateProvider(
    id,
    adminProviderUpdateReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminProviderUpdateReqDto** | **AdminProviderUpdateReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AdminProviderResDto**

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

# **adminConfigControllerUpdateScreening**
> AdminScreeningResDto adminConfigControllerUpdateScreening(adminScreeningReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminScreeningReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let adminScreeningReqDto: AdminScreeningReqDto; //

const { status, data } = await apiInstance.adminConfigControllerUpdateScreening(
    adminScreeningReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminScreeningReqDto** | **AdminScreeningReqDto**|  | |


### Return type

**AdminScreeningResDto**

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

# **adminConfigControllerUpdateTerm**
> AdminTermResDto adminConfigControllerUpdateTerm(adminTermReqDto)


### Example

```typescript
import {
    AdminConfigApi,
    Configuration,
    AdminTermReqDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminConfigApi(configuration);

let id: string; // (default to undefined)
let adminTermReqDto: AdminTermReqDto; //

const { status, data } = await apiInstance.adminConfigControllerUpdateTerm(
    id,
    adminTermReqDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminTermReqDto** | **AdminTermReqDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AdminTermResDto**

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

