package models

import "github.com/mjarkk/orko/db"

// Bootstrap makes sure the database has all the tables for all the models
func Bootstrap() error {
	modelsToInsert := []db.TableRequirements{
		&User{},
	}

	tablesInDBMap := map[string]bool{}
	tablesInDB, err := db.TablesInDB()
	if err != nil {
		return err
	}
	for _, tableName := range tablesInDB {
		tablesInDBMap[tableName] = true
	}

	for _, model := range modelsToInsert {
		if tablesInDBMap[model.TableName()] {
			continue
		}
		db.CreateTable(model)
	}

	return nil
}
