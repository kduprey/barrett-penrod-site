export interface AirTableResponse {
	records: Record[];
}

export interface Record {
	id: string;
	createdTime: Date;
	fields: Fields;
}

export interface Fields {
	Name: string;
	Message: string;
	Status: string;
	Email: string;
	Created: Date;
}
