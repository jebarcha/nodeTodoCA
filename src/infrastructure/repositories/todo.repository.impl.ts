import {
  CreateTodoDto,
  TodoDatasource,
  TodoEntity,
  UpdateTodoDto,
} from '../../domain';
import { TodoRepository } from '../../domain/repositories/todo.repository';

export class TodoRepositoryImpl implements TodoRepository {
  constructor(private readonly datasource: TodoDatasource) {}

  create(creaetTodoDto: CreateTodoDto): Promise<TodoEntity> {
    return this.datasource.create(creaetTodoDto);
  }
  getAll(): Promise<TodoEntity[]> {
    return this.datasource.getAll();
  }
  findById(id: number): Promise<TodoEntity> {
    return this.datasource.findById(id);
  }
  updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
    return this.datasource.updateById(updateTodoDto);
  }
  deleteByIdid(id: number): Promise<TodoEntity> {
    return this.datasource.deleteByIdid(id);
  }
}
