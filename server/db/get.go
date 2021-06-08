package db

import r "gopkg.in/rethinkdb/rethinkdb-go.v6"

func Get(data InsertRequirements) error {
	c, err := r.DB("orko").Table(data.TableName()).Insert(data).Run(session)
	if err != nil {
		return err
	}
	return c.One(data)
}
