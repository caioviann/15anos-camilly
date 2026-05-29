package ProjectCamilly.project15years.model;

import jakarta.persistence.*;

@Entity
@Table(name = "invited")
public class Invited {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "invited_name")
    private String invitedName;
    @Column(nullable = true)
    private Boolean confirmed;

    public Invited(){

    }

    public Invited(String invitedName, Boolean confirmed) {
        this.invitedName = invitedName;
        this.confirmed = confirmed;
    }

    public String getInvitedName() {
        return invitedName;
    }

    public void setInvitedName(String invitedName) {
        this.invitedName = invitedName;
    }

    public Boolean getConfirmed() {
        return confirmed;
    }

    public void setConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
