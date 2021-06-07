package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/etag"
	"github.com/mjarkk/go-graphql"
	"github.com/mjarkk/orko/db"
	"github.com/mjarkk/orko/models"
	"github.com/mjarkk/orko/schema"
)

func main() {
	graphqlSchema, err := graphql.ParseSchema(schema.QueryRoot{}, schema.MethodRoot{}, nil)
	if err != nil {
		log.Fatal(err)
	}

	app := fiber.New(fiber.Config{
		ServerHeader: "Orko",
	})

	app.Use(etag.New())
	app.Use(compress.New())
	app.Use(cors.New(cors.Config{}))

	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(map[string]string{
			"status": "ok",
		})
	})

	app.All("/api/graphql", func(c *fiber.Ctx) error {
		body, errors := graphqlSchema.HandleRequest(
			c.Method(),
			func(key string) string { return c.Query(key) },
			func(key string) (string, error) { return c.FormValue(key), nil },
			func() []byte { return c.Body() },
			string(c.Request().Header.ContentType()),
		)
		res := graphql.GenerateResponse(body, errors)

		c.Response().Header.Set("Content-Type", "application/json")
		return c.SendString(res)
	})

	db.Setup()
	models.Bootstrap()

	log.Fatal(app.Listen(":8222"))
}
