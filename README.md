## Github action for redis setup

This action create a Redis docker container.

### Inputs

#### `containerName`

Name of the container. Default `redis`.

#### `hostPort`

The port of host. Default `6379`.

#### `containerPort`

The port of container. Default `6379`.

#### `version`

Version of redis to use. Default `"latest"`.

#### `password`

Redis server password. Default `""`.

### Outputs

#### `containerName`

Name of the container.

## Example usage

```yml
name: Setup redis
  uses: chenjuneking/redis-setup-action@v1
  with:
    version: 6
    hostPort: 5034
    containerPort: 6379
    password: 123456
```
