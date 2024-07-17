import { CreateTodoDto, UpdateTodoDto } from '../dtos';
import { TodoEntity } from '../entities/todo.entity';

export abstract class TodoRepository {
  abstract create(creaetTodoDto: CreateTodoDto): Promise<TodoEntity>;

  //todo: pagination
  abstract getAll(): Promise<TodoEntity[]>;

  abstract findById(id: number): Promise<TodoEntity>;
  abstract updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity>;
  abstract deleteByIdid(id: number): Promise<TodoEntity>;
}
