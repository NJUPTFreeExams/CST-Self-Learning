---
title: 如何解决问题
---

我们无法避免遇到问题。但幸运的是，我们有很多办法解决它们。

## RTFM

RTFM 意为 “Read The ~~Fucking~~Friendly Manual”，即 “读文档”。

在学习计算机的过程中，您会阅读大量的文档。尽管阅读文档很枯燥，但这确实是我们遇到问题时可以查阅的最权威的资料。

特别说一下 Linux 中的文档：

您可以通过 `man` 指令（意为 manual，即 “使用手册”）来查询 Linux 命令或 C 语言库函数等内容。例如，如果您想了解 C 语言编译器 `gcc`，可以输入 `man gcc`；如果您想使用关键词搜索，可以使用 `man -k`。

另一个注意点是，`man` 手册分为了多个小节（section），用于查询相同名字的不同内容。例如 `kill` 既是一个命令行程序，又是一个系统调用。如果直接运行 `man kill`，您得到的会是命令行程序的手册页；如果您向查询系统调用，应该要输入 `man 2 kill`，表示查询第二节（会以 `kill (2)` 这样的形式标出）。您可以使用 `man man` 来查询具体哪个数字表示哪一节、对应什么内容。您还可以使用 `man -a kill` 来遍历所有名为 `kill` 的手册页。

另一个有用的命令是 `apropos`，用于查询一个命令。例如您想查询目录相关的命令，可以输入 `apropos director`（使用 `director`，这样 `directory` 和 `directories` 就都能查询到了）。

## STFW

STFW 意为 “Search The ~~Fucking~~Friendly Web”，即 “上网查”。

如果您使用较为传统的关键词搜索，强烈建议您使用 Google 搜索，并尽量使用英文搜索技术内容。

或者，您也可以尝试像 [perplexity](https://www.perplexity.ai/) 这样的 AI 搜索工具。

## ATFA

ATFA 意为 “Ask The ~~Fucking~~Friendly AI”，即 “问 AI”。

参考[大语言模型](guides/llm)。

## 向他人提问

不要像个傻子一样问问题！下面这份指南将会教您如何正确提问：

- [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)
