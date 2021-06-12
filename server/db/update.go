package db

import (
	r "gopkg.in/rethinkdb/rethinkdb-go.v6"
)

type UpdateRequirements interface {
	GetID() string
	TableName() string
}

func Update(data UpdateRequirements) error {
	id := data.GetID()
	return r.DB("orko").Table(data.TableName()).Filter(map[string]string{"id": id}).Update(data).Exec(session)

}
