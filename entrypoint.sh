#!/bin/sh

commands="docker run --name $INPUT_CONTAINERNAME"

commands="$commands -d -p $INPUT_HOSTPORT:$INPUT_CONTAINERPORT redis:$INPUT_VERSION redis-server"

if [ -n "$INPUT_PASSWORD" ]; then
  commands="$commands --requirepass $INPUT_PASSWORD"
fi

commands="$commands --port $INPUT_CONTAINERPORT"

echo "execute command: $commands"
sh -c "$commands"

echo "::set-output name=containerName::$INPUT_CONTAINERNAME"