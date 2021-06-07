package models

import "github.com/mjarkk/orko/db"

type Project struct {
	ID   string `rethinkdb:"id,omitempty"`
	Repo string
	Name string
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

func CreateProject(repo string) (*Project, error) {
	// TODO check if repo url

	newProject := &Project{
		Repo: repo,
	}
	err := db.Insert(newProject)
	if err != nil {
		return nil, err
	}

	return newProject, nil
}
