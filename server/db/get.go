package db

import r "gopkg.in/rethinkdb/rethinkdb-go.v6"

func GetByID(id string, data TableRequirements) error {
	c, err := r.DB("orko").Table(data.TableName()).Filter(map[string]string{"id": id}).Run(session)
	if err != nil {
		return err
	}
	return c.One(data)
}

func GetAll(modal TableRequirements, data interface{}) error {
	c, err := r.DB("orko").Table(modal.TableName()).Run(session)
	if err != nil {
		return err
	}
	return c.All(data)
}
