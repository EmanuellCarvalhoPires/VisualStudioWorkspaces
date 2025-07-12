
SELECT albums.ArtistID, artists.name, COUNT(albums.AlbumID) as TotalAlbuns
FROM albums
LEFT JOIN artists on
albums.ArtistID = artists.ArtistID
WHERE name = "Led Zeppelin"

_______________________________________________________

SELECT albums.title, tracks.Unitprice, artists.name
FROM tracks
left JOIN albums on
albums.AlbumID = tracks.AlbumID
LEFT JOIN artists on
artists.artistid = albums.AlbumID
WHERE artists.name = "Audioslave"

_______________________________________________________

SELECT customers.Firstname, customers.lastname, invoices.invoiceid
FROM customers
LEFT JOIN invoices ON
customers.customerid = invoices.customerid
WHERE invoices.invoiceid = NULL


_______________________________________________________

SELECT DISTINCT albums.albumid, albums.title, SUM(tracks.unitprice)
FROM albums
LEFT JOIN tracks ON
albums.albumid = tracks.albumid
WHERE albums.title = "Big Ones"
ORDER BY albums.albumid
_______________________________________________________

SELECT name, AlbumID
FROM tracks
WHERE AlbumID = (SELECT AlbumID FROM albums WHERE title = "Californication")

_______________________________________________________

--- O senhor pode encontrar a produção total de iogurte para os estados no ano de 2022 que também têm dados de produção de queijo a partir de 2023? Isso ajudará a Dairy Division em seu planejamento.
SELECT y.State_ANSI ,SUM(y.VALUE)
FROM yogurt_production y 
WHERE Value in (SELECT Value FROM cheese_production c) IS NOT NULL AND y.Year = '2022' and (SELECT Value FROM cheese_production WHERE Year = '2023' and Value is NOT NULL)
