package db

import (
	r "gopkg.in/rethinkdb/rethinkdb-go.v6"
)

type DropRequirements interface {
	GetID() string
	TableName() string
}

func Delete(data DropRequirements) error {
	return r.DB("orko").Table(data.TableName()).Get(data.GetID()).Delete().Exec(session)
}
