# Status
Model: Legends of Runeterra


## `Status` <Badge text="Pyot Core" vertical="middle"/> <Badge text="GET" vertical="middle"/>

> `platform: str = None` <Badge text="param" type="warning" vertical="middle"/>

> `"status_v1_platform_data": []` <Badge text="endpoint" type="error" vertical="middle"/>

> `id: str`
>
> `name: str`
>
> `locales: List[str]`
>
> `maintenances: List[StatusDetailData]`
>
> `incidents: List[StatusDetailData]`


## `StatusDetailData` <Badge text="Pyot Static" vertical="middle"/>

> `id: int`
>
> `maintenance_status: str`
>
> `incident_severity: str`
>
> `titles: List[StatusContentData]`
>
> `updates: List[StatusUpdateData]`
>
> `created_at: datetime`
>
> `archive_at: datetime`
>
> `updated_at: datetime`
>
> `platforms: List[str]`


## `StatusUpdateData` <Badge text="Pyot Static" vertical="middle"/>

> `id: int`
>
> `author: str`
>
> `publish: bool`
>
> `publish_locations: List[str]`
>
> `translations: List[StatusContentData]`
>
> `created_at: datetime`
>
> `updated_at: datetime`


## `StatusContentData` <Badge text="Pyot Static" vertical="middle"/>

>`locale: str`
>
>`content: str`
