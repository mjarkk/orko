package db

import (
	"log"

	r "gopkg.in/rethinkdb/rethinkdb-go.v6"
)

var session *r.Session

func Setup() {
	s, err := r.Connect(r.ConnectOpts{
		Address: "localhost:28015",
	})
	session = s

	if err != nil {
		log.Fatalln(err)
	}
}

type TableRequirements interface {
	TableName() string
}

func CreateTable(model TableRequirements) {
	r.DB("orko").TableCreate(model.TableName()).Run(session)
}
func DropTable(model TableRequirements) {
	r.DB("orko").TableDrop(model.TableName()).Run(session)
}
func TablesInDB() ([]string, error) {
	c, err := r.DB("orko").TableList().Run(session)
	if err != nil {
		return nil, err
	}

	res := []string{}
	err = c.All(&res)
	if err != nil {
		return nil, err
	}

	return res, nil
}
