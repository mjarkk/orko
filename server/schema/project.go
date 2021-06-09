package schema

import "github.com/mjarkk/orko/models"

func (MethodRoot) ResolveCreateProject(args struct{ Repo string }) (*models.Project, error) {
	return models.CreateProject(args.Repo)
}

func (QueryRoot) ResolveUpdateProject(args struct{ Id string }) (*models.Project, error) {
	return models.UpdateProject(args.Id)
}

func (QueryRoot) ResolveProjects() ([]models.Project, error) {
	return models.GetProjects()
}

func (QueryRoot) ResolveProject(args struct{ Id string }) (models.Project, error) {
	return models.GetProject(args.Id)
}
