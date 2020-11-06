export interface IGeoSchema {
	description?: IGeoDescriptionSchema
	bones?: IBoneSchema[]
}

export interface IGeoDescriptionSchema {
	identifier?: string
	texture_width?: number
	texture_height?: number
}

export interface IBoneSchema {
	name?: string
	parent?: string
	inflate?: number
	pivot?: [number, number, number]
	rotation?: [number, number, number]
	mirror?: boolean
	cubes?: ICubeSchema[]
	poly_mesh: IPolyMesh
}

export type TVector = [number, number, number]
export interface IPolyMesh {
	normalized_uvs?: boolean
	positions?: TVector[]
	normals?: TVector[]
	uvs?: [number, number][]
	polys?:
		| [TVector, TVector, TVector][]
		| [TVector, TVector, TVector, TVector][]
		| 'tri_list'
		| 'quad_list'
}
export interface ICubeSchema {
	origin?: [number, number, number]
	size?: [number, number, number]
	uv?: [number, number] | IUVObj
	rotation?: [number, number, number]
	pivot?: [number, number, number]
	inflate?: number
	mirror?: boolean
}
export interface IUVObj {
	north: IUVConfig
	south: IUVConfig
	east: IUVConfig
	west: IUVConfig
	up: IUVConfig
	down: IUVConfig
}
export interface IUVConfig {
	uv: [number, number]
	uv_size: [number, number]
}
