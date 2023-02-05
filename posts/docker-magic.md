---
title: "docker isn't magic: it isn't a virtual machine either"
date: '2021-03-22'
![docker](https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80)
---

Docker is the most popular engine for running Linux containers which are an increasingly popular way to deploy applications. Many people use containers but fewer people know what a container actually does. I hope you enjoy this short talk I gave to the [Linux and Unix Users Group at Virginia Tech](https://vtluug.org) where I overview what actually happens when you type `docker run`.

[Click here to watch the talk](https://www.youtube.com/watch?v=a6Hb8mWKLZY)
[![](https://img.youtube.com/vi/a6Hb8mWKLZY/0.jpg)](https://www.youtube.com/watch?v=a6Hb8mWKLZY)

**A few key points from the talk:**

- Docker is **NOT** a hypervisor
  - Rather, Docker allows you to isolate a process at multiple levels through namespaces
    - mnt: filesystem
    - pid: process
    - network: isolated network stack
    - user: allows non-root on host to be mapped to root in container
    - uts: dedicated hostname
    - ipc: dedicated memory
- After `cgroups` were added to the Linux kernel in 2007, several projects emerged that took advantage of them by creating containerization processes
  - `LXC` — “Linux Containers”
  - `LMCTFY` — Google’s internal container stack pre-Docker
  - `systemd-nspawn` — “chroot on steroids,” packaged with systemd
  - `rkt` — Dameonless OCI-compliant runtime from CoreOS
- Docker was originally started to build tooling around Linux Containers that were more developer friendly but before long, dropped LXC to establish the "Open Container Initiative" (OCI)
  - The basic idea is that any OCI-complaint runtime can run any OCI-compliant image, so there is full compatibility
- In the talk all of the behavior I demo "manually" in `bash` can be mirrored to a `docker` command
  - When I used `wget` to obtain the tarball of my filesystem before the talk that is similar to pulling an image using `docker pull`
    - _Pro tip: look at all local container images with `docker image ls`_
  - When I run my "container" with `chroot` that is similar to using `docker run <image name>`
  - When I attach to the already running container using `nsenter` that is similar to using `docker exec`

_The following sources were extremly helpful in preparing this talk_:

- [Docker is NOT a Hypervisor](https://blog.mikesir87.io/2017/05/docker-is-not-a-hypervisor/) by Michael Irwin
- [Containers from Scratch](https://ericchiang.github.io/post/containers-from-scratch/) by Eric Chiang
- [A Comprehensive Container Runtime Comparison](https://www.capitalone.com/tech/cloud/container-runtime/) by Evan Baker
