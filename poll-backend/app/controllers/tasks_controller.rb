class TasksController < ApplicationController
  def index
    @tasks = Task.all
    render json: @tasks
  end

  def show
    @task = Task.find(params[:id])
    render json: @task
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render json: @task
    else
      render error: { error: 'error in saving task' }, status: 400
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task
      @task.update(task_params)
      render json: @task
    else
      render error: { error: 'error in updating task' }, status: 400
    end
  end

  private
  def task_params
    params.require(:task).permit(:name, :description, :estimate)
  end
end
