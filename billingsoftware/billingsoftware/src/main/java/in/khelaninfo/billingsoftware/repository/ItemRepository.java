package in.khelaninfo.billingsoftware.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import in.khelaninfo.billingsoftware.dto.ItemEntity;

public interface ItemRepository extends JpaRepository<ItemEntity, Long>{

	ItemEntity findByItemId(String itemId);
	Integer countByCategoryId(Long id);
}
