package models

import "github.com/mjarkk/orko/db"

type Project struct {
	ID   string `rethinkdb:"id,omitempty"`
	Repo string
	Name string
}

func GetProjects() ([]Project, error) {
	res := []Project{}
	err := db.GetAll(&Project{}, &res)
	return res, err
}

func GetProject(id string) (Project, error) {
	res := Project{}
	return res, db.GetByID(id, &res)
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

type UpdateProjectData struct {
	Name *string
}

func UpdateProject(id string, data UpdateProjectData) (*Project, error) {
	var project Project
	err := db.GetByID(id, &project)
	if err != nil {
		return nil, err
	}

	projectUpdated := false

	if data.Name != nil {
		projectUpdated = true
		project.Name = *data.Name
	}

	if projectUpdated {
		db.Update(&project)
	}

	return &project, nil
}
