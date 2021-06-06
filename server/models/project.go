package models

type Project struct {
	ID string `json:"id" rethinkdb:"id,omitempty"`
}

func (*Project) TableName() string {
	return "users"
}

func (u *Project) SetID(id string) {
	u.ID = id
}

func (u *Project) GetID() string {
	return u.ID
}
