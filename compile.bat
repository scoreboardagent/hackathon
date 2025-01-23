#!/bin/bash

@echo off
xcopy "src\*" "public\" /E /I /Y
echo Files successfully copied from /src to /public
