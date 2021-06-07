package models

type User struct {
	ID       string `rethinkdb:"id,omitempty"`
	Name     string
	Email    string
	Password string
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
