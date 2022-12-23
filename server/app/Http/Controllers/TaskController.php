<?php

namespace App\Http\Controllers;

use App\Models\Task as Task;
use App\Http\Resources\Task as TaskResource;
use Illuminate\Http\Request;

class TaskController extends Controller
{
  public function index()
  {
    $tasks = Task::paginate(15);
    return TaskResource::collection($tasks);
  }

  public function show($id)
  {
    $task = Task::findOrFail($id);
    return new TaskResource($task);
  }

  public function store(Request $request)
  {
    $task = new Task;
    $task->description = $request->input('description');
    $task->date = $request->input('date');

    if ($task->save()) {
      return new TaskResource($task);
    }
  }

  public function update(Request $request)
  {
    $task = Task::findOrFail($request->id);
    $task->description = $request->input('description');
    $task->date = $request->input('date');

    if ($task->save()) {
      return new TaskResource($task);
    }
  }

  public function destroy($id)
  {
    $task = Task::findOrFail($id);
    if ($task->delete()) {
      return new TaskResource($task);
    }
  }
}
