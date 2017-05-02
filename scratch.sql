-- ADD JP description for blank_count widget template (AV-854)
UPDATE widget_template SET DESCRIPTION = replace(DESCRIPTION, '<value lang="EN">', '<value lang="JA"></value><value lang="EN">') WHERE PREVIEW_CLS = 'blank_count';

