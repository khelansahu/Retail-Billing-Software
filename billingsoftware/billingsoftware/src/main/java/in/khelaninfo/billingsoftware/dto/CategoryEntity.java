package in.khelaninfo.billingsoftware.dto;
import java.sql.Timestamp;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@jakarta.persistence.Table(name="tbl_category")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryEntity {

	@jakarta.persistence.Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(unique = true, nullable = false)
	private String categoryId;
	@Column(unique = true)
	private String name;
	private String description;
	private String bgColor;
	
	@Lob  //to consider as large object
	@Column(columnDefinition = "longblob",length = 999999999)  //size
	private byte imgUrl[];
	
	@CreationTimestamp
	@Column(updatable = false)
	private Timestamp createdAt;
	@UpdateTimestamp
	private Timestamp updatedAt;
	
}
