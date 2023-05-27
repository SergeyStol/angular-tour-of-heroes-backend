#!/bin/sh

TIMEOUT=15

wait_for_start_app() {
  for i in `seq $TIMEOUT` ; do
    nc -z "$HOST" "$PORT" > /dev/null 2>&1
    result=$?
    if [ $result -eq 0 ] ; then
      if [ $# -gt 0 ] ; then
        exec "$@"
      fi
      exit 0
    fi
    sleep 1
  done
  echo "Operation timed out" >&2
  exit 1
}

HOST=$(printf "%s\n" "$1"| cut -d : -f 1)
PORT=$(printf "%s\n" "$1"| cut -d : -f 2)
shift
wait_for_start_app "$@"