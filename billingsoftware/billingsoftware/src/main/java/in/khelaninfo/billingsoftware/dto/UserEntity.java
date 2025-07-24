package in.khelaninfo.billingsoftware.dto;

import java.security.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Table;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@jakarta.persistence.Table(name="tbl_users")
public class UserEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(unique = true)
	private String userId;
	private String email;
	private String password;
	private String role;
	private String name;
	@CreationTimestamp
	@Column(updatable = false)
	private Timestamp createdAt;
	@UpdateTimestamp
	private Timestamp updatedAt;
	
}
