defmodule Todo.PageControllerTest do
  use Todo.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ ~s(<div id="root"></div>)
  end
end
