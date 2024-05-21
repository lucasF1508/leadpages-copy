#!/bin/bash

envFile=$(for file in ../../.env.development ../../.env.local ../../.env; do [[ -f $file ]] && echo $file && break; done)

if [[ -n $envFile ]]; then
  while IFS= read -r line; do
    if [[ $line == SANITY_* ]]; then
      export "${line//\"/}"
    fi
  done <"$envFile"
fi

sanity start
