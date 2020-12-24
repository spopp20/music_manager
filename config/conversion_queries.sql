-- Get songs from a relational database for export in JSON format.
-- The DBeaver client converts results into JSON format
SELECT
-- get rid of prefixes including x and X before '-' in the titles
TRIM(BOTH ' ' FROM SUBSTR(REGEXP_REPLACE(title,'^[xX]',''), instr(title, "-") +1)) as title,
arrangement,
start_key,
tempo_cd_id as tempo,
-- Get the first few beginning words of the song
TRIM(BOTH '\n' FROM SUBSTRING_INDEX(REPLACE(REPLACE(words, '\r', ''), '\n', ' '),' ', 4)) as begins_with,
-- Use the title prefixes to identify song collection tags
CASE
    WHEN LOCATE('Q', UCASE(title)) = 1 THEN 'Special'
    WHEN LOCATE('X', UCASE(title)) = 1 THEN 'Youth'
    ELSE 'Main'
END as tag,
-- detect words enclosed in parens within the title and save it as a note
SUBSTR(title,instr(title,"(") + 1, instr(title,")") - instr(title,"(") - 1) as note
FROM song;



