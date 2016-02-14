defmodule Mix.Tasks.Todo.Digest do
  use Mix.Task

  def run(args) do
    Mix.Shell.IO.cmd "npm run prod"
    :ok = Mix.Tasks.Phoenix.Digest.run(args)
  end
end
