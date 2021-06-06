package models

type User struct {
	ID       string `json:"id" rethinkdb:"id,omitempty"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (*User) TableName() string {
	return "users"
}

func (u *User) SetID(id string) {
	u.ID = id
}

func (u *User) GetID() string {
	return u.ID
}
