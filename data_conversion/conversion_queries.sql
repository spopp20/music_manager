
select count(*) from song;

-- Get songs from a relational database for export in JSON format.
-- The DBeaver client converts results into JSON format
SELECT
id as song,
-- get rid of prefixes including x and X before '-' in the titles
TRIM(BOTH ' ' FROM SUBSTR(REGEXP_REPLACE(title,'^[xX]',''), instr(title, "-") +1)) as title,
arrangement,
-- remove x or X from the key
CASE
    WHEN LOCATE('X', UCASE(start_key)) > 0 THEN NULL
    ELSE start_key
END as start_key,
tempo_cd_id as tempo,
-- Get the first few beginning words of the song removing \n \r
TRIM(BOTH '\n' FROM SUBSTRING_INDEX(REPLACE(REPLACE(
    -- removing words in parens from begins_with
    REPLACE(words, REGEXP_SUBSTR(words, '\\(.*\\)|\\).*\\('), '')
    , '\r', ''), '\n', ' '),' ', 4)) as begins_with,
-- Limit to 4 words in Spanish
SUBSTRING_INDEX(SUBSTR(words, instr(words,"(") + 1, instr(words,")") - instr(words,"(") - 1),' ', 4) as begins_spanish,
-- Use the title prefixes to identify song collection tags
CASE
    WHEN LOCATE('Q', UCASE(title)) = 1 THEN 'Special'
    WHEN LOCATE('X', UCASE(title)) = 1 THEN 'Youth'
    ELSE 'Main'
END as tag,
-- detect words enclosed in parens within the title and save it as a note
SUBSTR(title, instr(title,"(") + 1, instr(title,")") - instr(title,"(") - 1) as note
FROM song;



-- Get Song Scores
SELECT id as song, 8 as instrument, words from song;



