package in.khelaninfo.billingsoftware.dto;

import java.math.BigDecimal;
import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tbl_items")
public class ItemEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(unique = true)
	private String itemId;
	private String name;
	private BigDecimal price;
	private String description;
	@CreationTimestamp
	@Column(updatable = false)
	private Timestamp createdAt;
	@UpdateTimestamp
	private Timestamp updatedAt;

	@Lob // to consider as large object
	@Column(columnDefinition = "longblob", length = 999999999) // size
	private byte imgUrl[];

	@ManyToOne
	@JoinColumn(name = "category_id", nullable = false)
	@OnDelete(action = OnDeleteAction.RESTRICT)
	private CategoryEntity category;

}
