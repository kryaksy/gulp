# gulp
Learning to use gulp!


Most workflows with Gulp tend to only require 4 different globbing patterns:
*.scss: The * pattern is a wildcard that matches any pattern in the current directory. In this case, we’re matching any files ending with .scss in the root folder (project).
**/*.scss: This is a more extreme version of the * pattern that matches any file ending with .scss in the root folder and any child directories.
!not-me.scss: The ! indicates that Gulp should exclude the pattern from its matches, which is useful if you had to exclude a file from a matched pattern. In this case, not-me.scss would be excluded from the match.
*.+(scss|sass): The plus + and parentheses () allows Gulp to match multiple patterns, with different patterns separated by the pipe | character. In this case, Gulp will match any file ending with .scss or .sass in the root folder.
