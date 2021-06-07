package schema

import "github.com/mjarkk/orko/models"

func (MethodRoot) ResolveCreateProject(args struct{ Repo string }) models.Project {
	return models.Project{
		ID: args.Repo,
	}
}

func (QueryRoot) ResolveProjects() []models.Project {
	return []models.Project{
		{
			ID:   "idk",
			Name: "Test project 1",
		},
	}
}

func (QueryRoot) ResolveProject(args struct{ Id string }) models.Project {
	return models.Project{}
}
