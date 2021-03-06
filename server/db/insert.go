package db

import (
	"github.com/google/uuid"
	r "gopkg.in/rethinkdb/rethinkdb-go.v6"
)

type InsertRequirements interface {
	SetID(string)
	TableName() string
}

func Insert(data InsertRequirements) error {
	data.SetID(uuid.NewString())
	return r.DB("orko").Table(data.TableName()).Insert(data).Exec(session)
}
