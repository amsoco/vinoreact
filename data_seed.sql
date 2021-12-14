INSERT INTO `privileges` (`id`, `role`) VALUES
(1, 'Usager'),
(2, 'Admin');


INSERT INTO `categories` (`id`, `nom`) VALUES
(1, 'vin rouge'),
(2, 'vin blanc'),
(3, 'vin rose'),
(4, 'vin mousseux');

INSERT INTO `users` (`id`, `email`, `name`, `password`, `privilege_id`, `created_at`, `updated_at`) VALUES
(1, 'user1@test.com', 'User1', '$2y$10$hnyLbhI014a3Dun8Q5T.n.g46euDHpffMVXJN5xdHkVPH0z9E3pb6', 1, '2021-11-25 01:31:36', '2021-11-25 01:31:36');

INSERT INTO `celliers` (`id`, `nom_cellier`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Cellier-Tito', 1, '2021-11-25 06:59:01', '2021-11-25 07:17:45');

INSERT INTO `wiki_vins` (`id`, `nom`, `pays`, `description`, `url_saq`, `format`, `millesime`, `url_img`, `categorie_id`, `created_at`, `updated_at`) VALUES
(1, 'Borsao Seleccion', 'Espagne', 'Vin rouge|Espagne|750 ml', 'https://www.saq.com/fr/10324623', '750 ml', 2019, 'https://www.saq.com/media/catalog/product/1/0/10324623-1_1602104750.png', 1, '2021-11-23 20:14:41', NULL),
(2, 'Monasterio de Las Vinas Gran Reserva', 'Espagne', 'Vin rouge|Espagne|750 ml', 'https://www.saq.com/fr/10359156', '750 ml', 2020, 'https://www.saq.com/media/catalog/product/1/0/10359156-1_1580596511.png', 1, '2021-11-23 20:14:41', NULL),
(3, 'Castano Hecula', 'Espagne', 'Vin rouge|Espagne|750 ml', 'https://www.saq.com/fr/11676671', ' 750 ml', 2019, 'https://www.saq.com/media/catalog/product/1/1/11676671-1_1603295447.png', 1, '2021-11-23 20:14:41', NULL),
(4, 'Campo Viejo Tempranillo Rioja', 'Espagne', 'Vin rouge|Espagne|750 ml', 'https://www.saq.com/fr/11462446', '750 ml', 2020, 'https://www.saq.com/media/catalog/product/1/1/11462446-1_1637615129.png', 1, '2021-11-23 20:14:41', NULL),
(5, 'Bodegas Atalaya Laya 2017', 'Espagne', 'Vin rouge|Espagne|750 ml', 'https://www.saq.com/fr/12375942', '750 ml', 2017, 'https://www.saq.com/media/catalog/product/1/2/12375942-1_1580663712.png', 1, '2021-11-23 20:14:41', NULL),
(6, 'Vin Vault Pinot Grigio', 'États-Unis', 'Vin blanc|États-Unis|750ml', 'https://www.saq.com/fr/13467048', '3 L', 2018, 'https://www.saq.com/media/catalog/product/1/3/13467048-1_1578536117.png', 2, '2021-11-23 20:14:41', NULL),
(7, 'Huber Riesling Engelsberg 2017', 'Autriche', 'Vin blanc|Autriche|750 ml', 'https://www.saq.com/fr/13675841', '750 ml', 2017, 'https://www.saq.com/media/catalog/product/1/3/13675841-1_1578540323.png', 2, '2021-11-23 20:14:41', NULL),
(8, 'Dominio de Tares Estay Castilla y Léon 2015', 'Espagne', 'Vin rouge|Espagne|750 ml', 'https://www.saq.com/fr/13802571', '750 ml', 2015, 'https://www.saq.com/media/catalog/product/1/3/13802571-1_1582741505.png', 1, '2021-11-23 20:14:41', NULL),
(9, 'Tessellae Old Vines Côtes du Roussillon 2016', 'France', 'Vin rouge|Espagne|750 ml', 'https://www.saq.com/fr/12216562', '750 ml', 2016, 'https://www.saq.com/media/catalog/product/1/2/12216562-1_1628521517.png', 1, '2021-11-23 20:14:41', NULL),
(10, 'Tenuta Il Falchetto Bricco Paradiso -... 2015', 'Italie', 'Vin rouge|Espagne|750 ml', 'https://www.saq.com/fr/13637422', '750 ml', 2015, 'https://www.saq.com/media/catalog/product/1/3/13637422-1_1578539716.png', 1, '2021-11-23 20:14:41', NULL);

-- --------------------------------------------------------

INSERT INTO `bouteilles` (`id`, `nom`, `pays`, `description`, `date_achat`, `prix_achat`, `url_saq`, `note`, `commentaire`, `quantite`, `millesime`, `format`, `url_img`, `categorie_id`, `cellier_id`, `created_at`, `updated_at`) VALUES
(1, 'Borsao Seleccion', 'Espagne', 'Vin rouge|Espagne|750 ml', '2021-11-23', '12.00', 'https://www.saq.com/fr/10324623', 8, 'A reprendre', 1, NULL, '750 ml', 'https://www.saq.com/media/catalog/product/1/0/10324623-1_1602104750.png', 1, 1, NULL, NULL),
(2, 'Monasterio de Las Vinas Gran Reserva', 'Espagne', 'Vin rouge|Espagne|750 ml', '2021-11-23', '17.00', 'https://www.saq.com/fr/10359156', 9, 'Très doux', 2, NULL, '750 ml', 'https://www.saq.com/media/catalog/product/1/0/10359156-1_1580596511.png', 1, 1, NULL, NULL),
(3, 'Castano Hecula', 'Espagne', 'Vin rouge|Espagne|750 ml', '2021-11-21', '15.00', 'https://www.saq.com/media/catalog/product/1/1/11676671-1_1603295447.png', 10, 'Excellent', 1, 2011, '750 ml', 'https://www.saq.com/media/catalog/product/1/0/10855758-1_1580609123.png?quality=80&fit=bounds&height=&width=', 1, 1, NULL, NULL),
(4, 'Campo Viejo Tempranillo Rioja', 'Espagne', 'Vin rouge|Espagne|750 ml', '2021-11-20', '21.00', 'https://www.saq.com/fr/11462446', 7, NULL, 2, 2016, '750 ml', 'https://www.saq.com/media/catalog/product/1/1/11462446-1_1637615129.png', 1, 1, NULL, NULL),
(5, 'Bodegas Atalaya Laya 2017', 'Espagne', 'Vin rouge|Espagne|750 ml', '2021-11-22', '17.50', 'https://www.saq.com/fr/12375942', 6, 'Acide', 1, 2017, '750 ml', 'https://www.saq.com/media/catalog/product/1/2/12375942-1_1580663712.png', 1, 1, NULL, NULL),
(6, 'Vin Vault Pinot Grigio', 'États-Unis', 'Vin blanc|États-Unis|750 ml', '2021-11-19', '14.00', 'https://www.saq.com/fr/13467048', NULL, NULL, 1, NULL, '3 L', 'https://www.saq.com/media/catalog/product/1/3/13467048-1_1578536117.png', 2, 1, NULL, NULL),
(7, 'Huber Riesling Engelsberg 2017', 'Autriche', 'Vin blanc|Autriche|750 ml', '2021-11-21', '15.00', 'https://www.saq.com/fr/13675841', 7, 'Ma mère a aimé', 2, 2017, '750 ml', 'https://www.saq.com/media/catalog/product/1/3/13675841-1_1578540323.png', 2, 1, NULL, NULL),
(8, 'Dominio de Tares Estay Castilla y Léon 2015', 'Espagne', 'Vin rouge|Espagne|750 ml', '2021-11-20', '21.00', 'https://www.saq.com/fr/13802571', 8, 'Fort', 3, 2015, '750 ml', 'https://www.saq.com/media/catalog/product/1/3/13802571-1_1582741505.png', 1, 1, NULL, NULL),
(9, 'Tessellae Old Vines Côtes du Roussillon 2016', 'France', 'Vin rouge|France|750 ml', '2021-11-23', '16.50', 'https://www.saq.com/fr/12216562', 9, 'Pour ma soeur', 2, 2016, '750 ml', 'https://www.saq.com/media/catalog/product/1/2/12216562-1_1628521517.png', 1, 1, NULL, NULL);