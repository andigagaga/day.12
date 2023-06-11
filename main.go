package main

import (
	"net/http"
	"strconv"
	"text/template"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.Static("/public", "public")

	e.GET("/", home)
	e.GET("/contact", contact)
	e.GET("/testimonial", testimonial)
	e.GET("/detail-blog/:id", detailBlog)
	e.GET("/addBlog", blog)
	e.POST("/addBlog", addBlog)

	e.GET("/hello", func(c echo.Context) error {
		return c.String(http.StatusOK, "hello ibab")
	})

	e.Logger.Fatal(e.Start("localhost:5000"))
}
func home(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/index.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}
	return tmpl.Execute(c.Response(), nil)

}
func contact(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/contact.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}
	return tmpl.Execute(c.Response(), nil)
}

func testimonial(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/testimonial.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}
	return tmpl.Execute(c.Response(), nil)
}
func blog(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/addBlog.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}
func detailBlog(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	data := map[string]interface{}{
		"Id":           id,
		"projectName":  "Dumbways Mobile App -2023",
		"starDate":     "2",
		"EndDate":      "1",
		"Description":  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex at voluptate rem asperiores earum. Nemo harum delectus natus aspernatur velit maxime in veniam vero, facere voluptate reprehenderit? Consectetur, quae eos.",
		"Technologies": "ReactJS",
	}

	var tmpl, err = template.ParseFiles("views/detail-blog.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), data)

}

func addBlog(c echo.Context) error {
	Name := c.FormValue("input-project-name")
	Date := c.FormValue("input-start-date")
	Description := c.FormValue("input-description")

	println("Name : " + Name)
	println("Date : " + Date)
	println("Description : " + Description)

	return c.Redirect(http.StatusMovedPermanently, "/addBlog")
}
